import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ModelSelectPage from "pages/ModelSelectPage";
import NoMatchPage from "pages/NoMatchPage";
import ViewPage from "pages/ViewPage";
import MultipleViewportPage from "pages/MultipleViewportPage";
import * as ShapeDiverViewer from "@shapediver/viewer";
import CustomUiPage from "pages/CustomUiPage";
import Login from "Login";

declare global {
	interface Window {
		SDV: typeof ShapeDiverViewer,
	}
}

export default function App() {
    
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	useEffect(() => {
		window.SDV = ShapeDiverViewer;
		debugger;
		const loginToken = localStorage.getItem("userToken");
		console.log(loginToken)
		if (loginToken === null || loginToken === undefined || loginToken === "false") {
		   console.log('here')
           setIsLoggedIn(false);
		} else {
		   setIsLoggedIn(true);
		}
	}, []);

	return (
		<MantineProvider defaultColorScheme="auto">
			<HashRouter>
				<Routes>
					<Route path="/" element={isLoggedIn ? <HomePage /> : <Login/>} />
					<Route path="view" element={isLoggedIn ? <ViewPage /> : <Login/>} />
					<Route path="modelSelect" element={isLoggedIn ? <ModelSelectPage /> : <Login/>} />
					<Route path="multipleViewport" element={isLoggedIn ? <MultipleViewportPage /> : <Login/>} />
					<Route path="customui" element={isLoggedIn ? <CustomUiPage /> : <Login/>} />
					<Route path="*" element={<NoMatchPage />} />
				</Routes>
			</HashRouter>
		</MantineProvider>
	);
}
