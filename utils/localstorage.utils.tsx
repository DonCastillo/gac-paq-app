import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (storageKey: string, data: any): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		AsyncStorage.setItem(storageKey, JSON.stringify(data))
			.then(() => {
				resolve(true);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const readData = async (storageKey: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(storageKey)
			.then((data) => {
				if (data !== null) {
					resolve(JSON.parse(data));
				}
				resolve(null);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export { storeData, readData };
