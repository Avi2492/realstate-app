import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
	return (
		<View className="">
			<Text className="font-bold text-3xl font-rubik my-10">
				Welcome to Restate
			</Text>
			<Link href={"/sign-in"}>Sign In</Link>
			<Link href={"/explore"}>Explore</Link>
			<Link href={"/profile"}>Profile</Link>
			<Link href="/properties/1">Properties</Link>
		</View>
	);
};

export default index;
