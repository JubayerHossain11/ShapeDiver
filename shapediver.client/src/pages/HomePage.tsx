import { Image, Container, Card, Group, Text, Blockquote, ActionIcon,useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars, IconLogout, IconLogout2 } from "@tabler/icons-react";
import React from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import classes from "pages/HomePage.module.css";
import ModelCard from "components/ui/ModelCard";

/**
 * Function that creates the home page.
 * On this page, an introduction is provided and all other pages are linked.
 *
 * Currently under construction.
 *
 * @returns
 */
export default function HomePage() {
    
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	function IconLogout(){
		localStorage.removeItem("userToken");
		window.location.reload();
	}
	
	return (
		<>
			<Container size="lg" px="lg">

				<div className="d-flex justify-content-between p-2">
				    <h1>ShapeDiver Example</h1>
					<ActionIcon
						variant="outline"
						color={colorScheme === "dark" ? "yellow" : "blue"}
						onClick={() => IconLogout()}
						title="Logout"
					>
						{colorScheme === "dark" ? <IconLogout2 size={18} /> : <IconLogout2 size={18} />}
					</ActionIcon>
				</div>
				

				<Card shadow="sm" p="lg" radius="md">
					{/*<Card.Section>*/}
					{/*	<Image*/}
					{/*		src="https://viewer.shapediver.com/v3/images/under_construction.png"*/}
					{/*		height={160}*/}
					{/*		alt="Under Construction"*/}
					{/*	/>*/}
					{/*</Card.Section>*/}
{/*					<Group gap="md" mt="md" mb="xs">*/}
{/*						<Text size="sm" c="dimmed">*/}
{/*On this example page we present several use cases that utilize custom React components and hooks for the creation of viewports, sessions,*/}
{/*controls for parameters and exports, and much more. All these components and hooks are provided in the repository and can be customized easily.*/}
{/*						</Text>*/}
{/*						<Blockquote color="blue" icon={<IconInfoCircle />} mt="xl">*/}
{/*Check out the source code for this example <a href="https://github.com/shapediver/ShapeDiverReactExample">here</a>.*/}
{/*						</Blockquote>*/}
{/*					</Group>*/}
				</Card>

				<div className={classes.pageContainer}>
					<ModelCard
						title="Model View Page"
						description="This example opens a session with a ShapeDiver model, displays it in a viewport, and creates two tabs of components representing
the parameters and exports defined by the model. All components are easily customizable."
						btnText="On to the View Page!"
						btnLink="/view"
						imageSrc="https://img2.storyblok.com/1280x0/filters:format(webp)/f/92524/2048x1481/81a30bd9de/0202.png"
						imageAlt="Under Construction"
					/>

					<ModelCard
						title="Model Select Page"
						description="This example displays a single viewport into which sessions with multiple ShapeDiver models can be loaded at once.
The settings of the model which is selected first are used to configure the viewport (camera, controls, etc).
Parameter and export controls are shown for all selected models."
						btnText="On to the Model Select Page!"
						btnLink="/modelSelect"
						imageSrc="https://img2.storyblok.com/1280x0/filters:format(webp)/f/92524/2048x1481/81a30bd9de/0202.png"
						imageAlt="Under Construction"
					/>

					{/*<ModelCard*/}
					{/*	title="Multiple Viewports and Models Page"*/}
					{/*	description="This example displays multiple viewports and models."*/}
					{/*	btnText="On to the Multiple Viewports and Models page!"*/}
					{/*	btnLink="/multipleViewport"*/}
					{/*	imageSrc="https://img2.storyblok.com/1280x0/filters:format(webp)/f/92524/2048x1481/81a30bd9de/0202.png"*/}
					{/*	imageAlt="Under Construction"*/}
					{/*/>*/}

					{/*<ModelCard*/}
					{/*	title="Custom UI Page"*/}
					{/*	description="This example shows how to use Grasshopper to influence the parameter panel (show/hide parameters, add custom parameters)."*/}
					{/*	btnText="On to the Custom UI page!"*/}
					{/*	btnLink="/customui"*/}
					{/*	imageSrc="https://img2.storyblok.com/1280x0/filters:format(webp)/f/92524/2048x1481/81a30bd9de/0202.png"*/}
					{/*	imageAlt="Under Construction"*/}
					{/*/>*/}
				</div>
			</Container>
		</>
	);
}
