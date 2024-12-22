<script lang="ts">
    let { data } = $props()
</script>
<div class="hero bg-base-200 min-h-[87vh] ">
    <div class="hero-content flex-col lg:flex-row prose">
      <img src="/about.jpg" alt="about" class="max-w-sm rounded-lg shadow-2xl" />
      <div class="pl-10 ">
        <data.content />
      </div>
    </div>
</div>