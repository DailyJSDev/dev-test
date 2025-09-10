<script setup>
	import {inject} from "vue";
	import Character from "@/components/ui/Character.vue";

	const {character, changeCharacter, sizeComment} = inject("character");
</script>

<template>
	<h1>Star War Character</h1>
	<button @click="changeCharacter">Get a random character info</button>
	<Character :name="character.name" :height="character.height" :message="sizeComment" />
</template>
