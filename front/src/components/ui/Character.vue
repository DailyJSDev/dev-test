<script setup>
	const props = defineProps(["name", "height", "message", "getMessages"]);
</script>

<template>
	<p class="bold">Name : {{ props.name || "Click the button !" }}</p>
	<p>Height : {{ props.height ?? "" }}</p>
	<p>{{ props.message }}</p>
</template>

<style scoped>
	.bold {
		font-weight: 600;
	}
</style>
