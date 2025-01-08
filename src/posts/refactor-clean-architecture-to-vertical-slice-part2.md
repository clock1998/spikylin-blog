---
title : Resturcture Clean Architecture to Vertical Slice Arhcitecture Part 2
description:  Refactory a Clean Architecture project to a Vertical Slice Arhcitecture project, change repository pattern to CQRS.
date: '2025-01-7'
tags: 
    - ASP.NET
    - Architecture
    - Refactoring
published: false
---

Add-Migration SomeMigration -OutputDir Data\Migrations

Reasons to refactoring

Start from smaller pieces

Reason to new up handler. does not need DI

Reason to have a common controller. to avoid adding tributte to every endpoint
## Possible solutions:

```csharp
[HttpPost, Route("Register")]
public async Task<IActionResult> Register([FromBody] UserDTO userDTO)
{
    try
    {
        var email = userDTO.Email.ToLower();
        var domain = email.Trim().Split("@")[1];
        if (email.IsValidEmail() && context.Domains.Any(n => n.Record == domain))
        {
            var user = await authRepository.RegisterAsync(userDTO);
            await authRepository.SendVerificationEmailAsync(user, Url, HttpContext.Request.Scheme);
            return Ok();
        }
        throw new Exception($"Domains allowed: {string.Join(",", context.Domains.Select(n => n.Record))}");
    }
    catch (Exception ex)
    {
        return Problem(detail: ex.Message, instance: null, 400, title: "Register", type: "Register");
    }
}

public async Task<ApplicationUser> RegisterAsync(UserDTO userDto)
{
    // Check if the passwords match
    if (!userDto.Password.Equals(userDto.PasswordConfirm))
    {
        throw new InvalidDataException("Passwords need to be the same.");
    }

    var existingUser = await userManager.FindByEmailAsync(userDto.Email);
    //if an user is not verified, remove the user.
    if (existingUser != null && !existingUser.EmailConfirmed)
    {
        await userManager.DeleteAsync(existingUser); 
    }
    else if(existingUser != null)
    {
        // Check if a user with the same email already exists
        throw new InvalidOperationException("A user with the given email already exists.");
    }
    var appUser = new ApplicationUser
    {
        UserName = userDto.Email,
        Email = userDto.Email,
        UserProfile = new UserProfile()
        {
            FirstName = userDto.FirstName,
            LastName = userDto.LastName,
            //SexualityId = string.IsNullOrEmpty(userDTO.SexualityId) ? null : Guid.Parse(userDTO.SexualityId),
            //EthnicityId = string.IsNullOrEmpty(userDTO.EthnicityId) ? null : Guid.Parse(userDTO.EthnicityId),
        },
    };

    var createResult = await userManager.CreateAsync(appUser, userDto.Password);

    if (createResult.Succeeded)
    {
        var addToRoleResult = await userManager.AddToRoleAsync(appUser, "Student");
        if (addToRoleResult.Succeeded)
        {
            return appUser;
        }

        await userManager.DeleteAsync(appUser);
        throw new InvalidOperationException("User registration failed.");
    }

    throw new InvalidOperationException(createResult.Errors.Select(e => e.Description).FirstOrDefault());
}
```