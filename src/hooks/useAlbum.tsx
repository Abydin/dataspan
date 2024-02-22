import { useEffect, useState } from "react";
import { listAlbums, viewAlbums } from "../utils";

const useAlbums = () => {
	const [loading, setLoading] = useState(true);
	const [albumName, setAlbumName] = useState<string | undefined>();
	const [albums, setAlbums] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const name = await listAlbums();
				setAlbumName(name);
			} catch (error) {
				console.error("Error fetching albums:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (albumName) {
			const fetchAlbumData = async () => {
				try {
					const albumData = await viewAlbums(albumName);
					setAlbums(albumData);
				} catch (error) {
					console.error("Error fetching album data:", error);
				} finally {
					setLoading(false);
				}
			};

			fetchAlbumData();
		}
	}, [albumName]);

	return { loading, albumName, albums };
};

export default useAlbums;
