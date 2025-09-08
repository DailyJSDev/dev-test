<script setup>
	const props = defineProps(["name", "height"]);
</script>

<template>
	<p class="bold">Name : {{ props.name || "Click the button !" }}</p>
	<p>Height : {{ props.height ?? "" }}</p>
</template>

<style scoped>
	.bold {
		font-weight: 600;
	}
</style>
