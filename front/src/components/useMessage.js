import {ref, onMounted, watchEffect} from "vue";
import {useUrl} from "./useUrl";

export function useMessage() {
	const messages = ref({
		human: "",
		nonHuman: "",
	});

	const {urlData, getData} = useUrl();

	onMounted(() => {
		getData("http://localhost:4000/");
	});

	watchEffect(() => {
		messages.value = {
			human: urlData.value?.human ?? "",
			nonHuman: urlData.value?.nonHuman ?? "",
		};
	});

	return {
		messages,
	};
}
