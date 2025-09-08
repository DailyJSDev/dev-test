<script setup>
	import {ref} from "vue";

	const data = ref({
		name: "",
		height: 0,
	});

	function getData() {
		const randomId = Math.floor(Math.random() * 50);
		const url = `https://swapi.py4e.com/api/people/${randomId}`;

		fetch(url)
			.then((resp) => resp.json())
			.then(
				({name, height}) =>
					(data.value = {
						name,
						height,
					})
			);
	}
</script>

<template>
	<h1>Star War Character</h1>
	<button @click="getData">Get a random character info</button>
	<p>Name : {{ data.name }}</p>
	<p>Height : {{ data.height }}</p>
</template>

<style scoped></style>
