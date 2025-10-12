import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { getHyphenedString } from "../../helpers/adapters";
import { HotelProps } from "../../types/types";

interface HotelCardProps {
	hotelInfo: HotelProps;
	isHovered?: boolean;
}

export const HotelCard = ({ hotelInfo, isHovered }: HotelCardProps) => {
	const title = `${getHyphenedString(hotelInfo.name)}-image`;

	return (
		<Card>
			<CardMedia
				sx={{ height: 140 }}
				image={'hotelInfo.imageUrl'}
				title={title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{'hotelInfo.name'}
				</Typography>
				<Typography sx={{ color: "text.secondary" }}>
					{'hotelInfo.location'}
				</Typography>
			</CardContent>
		</Card>
	);
};
