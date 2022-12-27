import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
	barColors: {
		"0": "#fff",
		"1.0": "#3cff64",
	},
	shadowBlur: 5,
});

const TopBarProgressByLocation = () => {
	const [progress, setProgress] = useState(false);
	const [previousLocation, setPreviousLocation] = useState("");
	const location = useLocation();

	useEffect(() => {
		setProgress(true);
		setPreviousLocation(location.pathname);
		// eslint-disable-next-line no-use-before-define
		preventInfiniteProgressBar();
	}, [location]);
	useEffect(() => {
		setProgress(false);
	}, [previousLocation]);

	const preventInfiniteProgressBar = () => {
		const hasClickedOnALinkTotheCurrentPage = previousLocation === location.pathname;
		if (hasClickedOnALinkTotheCurrentPage) {
			setPreviousLocation("");
		}
	};

	if (!progress) {
		return <></>;
	}

	return <TopBarProgress />;
};
