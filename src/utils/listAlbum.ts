import { s3 } from "./S3instance";

export const listAlbums = async () => {
	try {
		const data: any = await s3
			.listObjects({
				Delimiter: "train",
				Bucket: "dataspan.frontend-home-assignment",
			})
			.promise();

		if (data.CommonPrefixes && data.CommonPrefixes.length > 0) {
			const firstAlbumPrefix = decodeURIComponent(
				data.CommonPrefixes[0]?.Prefix
			);
			return firstAlbumPrefix;
		} else {
			console.log("No albums found.");
		}
	} catch (error) {
		console.error("Error listing albums:", error);
	}
};
