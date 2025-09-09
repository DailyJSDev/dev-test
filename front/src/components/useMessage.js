import {ref, onMounted} from "vue";

export function useMessage() {
	const messages = ref({
		human: "",
		nonHuman: "",
	});

	onMounted(() => {
		fetch("http://localhost:4000/")
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				return data;
			})
			.then(({human, nonHuman}) => (messages.value = {human, nonHuman}));
	});

	return {
		messages,
	};
}
