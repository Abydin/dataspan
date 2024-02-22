import { s3 } from "./S3instance";

export const listAlbums = async (val: string) => {
	const albumBucketName = "dataspan.frontend-home-assignment";
	var bucketUrl =
		"https://s3.eu-central-1.amazonaws.com/" + albumBucketName + "/";
	try {
		const data: any = await s3
			.listObjects({
				Delimiter: val,
				Bucket: "dataspan.frontend-home-assignment",
				MaxKeys: 200,
			})
			.promise();

		console.log({ data });

		if (data.Contents && data.Contents.length > 0) {
			return data.Contents.map((photo: any) => ({
				photoKey: photo.Key,
				photoUrl: bucketUrl + encodeURIComponent(photo.Key),
				...photo,
			})).filter(
				({ photoUrl }: { photoUrl: string }) =>
					photoUrl.endsWith(".jpg") || photoUrl.endsWith(".png")
			);
		} else {
			console.log("No albums found.");
		}
	} catch (error) {
		console.error("Error listing albums:", error);
	}
};
