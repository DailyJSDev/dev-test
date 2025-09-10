<script setup>
	import {computed, watchEffect} from "vue";
	import {useMessage} from "@/components/useMessage";
	import {useCharacter} from "@/components/useCharacter";

	import Character from "@/components/Character.vue";

	const {character, getData} = useCharacter();

	async function changeCharacter() {
		const randomId = Math.floor(Math.random() * 50);
		const url = `https://swapi.py4e.com/api/people/${randomId}`;

		await getData(url);
	}

	const {messages} = useMessage();

	// const message = ref("");

	// watch([character], () => {
	// 	message.value = messages.value[/\d+/.test(character.value.name) ? "nonHuman" : "human"];
	// });

	const sizeComment = computed(() => {
		if (character.value.height === 0) return "Get a character first !";

		return messages.value[character.value.height > 170 ? "tall" : "short"];
	});

	watchEffect(() => {
		console.log("Type of character height : ", typeof character.value.height);
	});
</script>

<template>
	<h1>Star War Character</h1>
	<button @click="changeCharacter">Get a random character info</button>
	<Character :name="character.name" :height="character.height" :message="sizeComment" />
</template>

<style scoped></style>
