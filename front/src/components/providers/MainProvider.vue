<script setup>
	import {provide, computed} from "vue";

	import {useMessage} from "@/components/composables/useMessage";
	import {useCharacter} from "@/components/composables/useCharacter";

	const {character, getData} = useCharacter();

	async function changeCharacter() {
		const randomId = Math.floor(Math.random() * 50);
		const url = `https://swapi.py4e.com/api/people/${randomId}`;

		await getData(url);
	}

	const {messages} = useMessage();

	const sizeComment = computed(() => {
		if (character.value.height === 0) return "Get a character first !";

		return messages.value[character.value.height > 170 ? "tall" : "short"];
	});

	provide("character", {
		character,
		changeCharacter,
		sizeComment,
	});
</script>

<template>
	<slot></slot>
</template>
