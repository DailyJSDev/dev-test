<script setup>
	// import {computed, watchEffect, inject} from "vue";
	// import {useMessage} from "@/components/composables/useMessage";
	// import {useCharacter} from "@/components/composables/useCharacter";

	// import Character from "@/components/ui/Character.vue";

	// const {character, getData} = useCharacter();

	// async function changeCharacter() {
	// 	const randomId = Math.floor(Math.random() * 50);
	// 	const url = `https://swapi.py4e.com/api/people/${randomId}`;

	// 	await getData(url);
	// }

	// const {messages} = useMessage();

	// const message = ref("");

	// watch([character], () => {
	// 	message.value = messages.value[/\d+/.test(character.value.name) ? "nonHuman" : "human"];
	// });

	// const sizeComment = computed(() => {
	// 	if (character.value.height === 0) return "Get a character first !";

	// 	return messages.value[character.value.height > 170 ? "tall" : "short"];
	// });

	import MainContent from "@/components/ui/MainContent.vue";
	import MainProvider from "@/components/providers/MainProvider.vue";
</script>

<template>
	<MainProvider>
		<MainContent />
	</MainProvider>
</template>

<style scoped></style>
