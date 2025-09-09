import {ref} from "vue";

export function useUrl() {
	const urlData = ref(null);

	async function getData(url) {
		try {
			const resp = await fetch(url);
			const data = await resp.json();
			urlData.value = data;
		} catch (e) {
			console.log(e);
		}
	}

	return {
		urlData,
		getData,
	};
}
