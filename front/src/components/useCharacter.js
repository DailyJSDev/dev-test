import {ref, watchEffect} from "vue";
import {useUrl} from "@/components/useUrl";

export function useCharacter() {
	const character = ref({
		name: "",
		height: 0,
	});

	const {urlData, getData} = useUrl();

	watchEffect(() => {
		character.value = {
			name: urlData.value?.name ?? "No name yet",
			height: urlData.value?.height === undefined ? 0 : urlData.value.height,
		};
	});

	return {
		character,
		getData,
	};
}
