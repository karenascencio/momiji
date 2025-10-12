import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { HotelCard } from "../HotelCard/HotelCard";
import { getHotels } from "../../assets/utils/getHotels";
import { HotelProps } from "../../types/types";

export const Layout = () => {
	const [hotels, setHotels] = useState<HotelProps[]>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadHotels = async () => {
			const data = await getHotels();
			setHotels(data);
			setLoading(false);
		};
		loadHotels();
	}, []);

	return (
		<div>
			{hotels?.map((hotel) => (
				<HotelCard
					hotelInfo={hotel}
				/>
			))}
		</div>
	);
};
