/* @flow */

import { css } from "styled-components";

export const screen: any = {
	xs: 767,
	sm: 991,
	md: 1199,
};

export const media = Object.keys(screen).reduce((m: any, size) => {
	m[size] = (...args: any) => css`
		@media (max-width: ${screen[size]}px) {
			${(css as any)(...args)};
		}
	`;

	return m;
}, {});

export const spaces = {
	small3: "0.1rem",
	small2: "0.25rem",
	small1: "0.5rem",
	normal: "0.7rem",
	large1: "1.5rem",
	large2: "2rem",
	large3: "3rem",
	large4: "4rem",
};

export const fontSizes = {
	small3: "0.25rem",
	small2: "0.5rem",
	small1: "0.75rem",
	normal: "0.875rem",
	large1: "1.0rem",
	large2: "1.25rem",
	large3: "1.5rem",
	large4: "2rem",
};

export const color = {
	gray1: "#ECECEC",
	gray2: "#D5D5D5",
	gray3: "#C5C5C5",
	gray4: "#76706B",
	gray5: "#D3D3D3",
	gray6: "#36454f",
	primaryCI: "#5D2A78",
	secondaryCI: "#FF3E7F",
	pink: "#E6228F",
	green: "#1CCE68",
	red: "#F05B74",
	blueCI: "#0F007A",
	orange: "#FDC68D",
	gray: "#8d99ae",
	black: "#000000",
	white: "#ffffff",
	white2: "#F9F9F9",
	lightBlueCI: "#00D6E6",
	yellowCI: "#FFC300",
	darkBlueCI: "#182230",
	facebook: "#3b5998",
	border: "#eaeaea",
	text: "#6B6D73",
	brand: "#2D2E30",
	purple: "#bea9c9",

	background: "#f8f8f8",
	white10: "rgba(255, 255, 255, 0.1)",
	white60: "rgba(255, 255, 255, 0.6)",
	white80: "rgba(255, 255, 255, 0.8)",
};

export const zIndex = {
	alert: 1052,
	overlayLoader: 1051,
	overlay: 5,
	transparentOverlay: 4,
	headerFooter: 3,
	dropdown: 2,
	local: 1,
};
