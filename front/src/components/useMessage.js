import {ref, onMounted, watchEffect} from "vue";
import {useUrl} from "./useUrl";

export function useMessage() {
	const messages = ref({
		tall: "",
		short: "",
	});

	const {urlData, getData} = useUrl();

	onMounted(() => {
		getData("http://localhost:4000/");
	});

	watchEffect(() => {
		messages.value = {
			tall: urlData.value?.tall ?? "",
			short: urlData.value?.short ?? "",
		};
	});

	return {
		messages,
	};
}
