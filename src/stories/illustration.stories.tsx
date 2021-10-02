import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IllustrationContainer from "../components/illustrationContainer";
const childrenDefault = <div style={{ flex: 1, width: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Hello World</h1>
    <h2>Hello World</h2>
    <h3>Hello World</h3>
    <h4>Hello World</h4>
    <h5>Hello World</h5>
    <h6>Hello World</h6>
</div>
const Meta: ComponentMeta<typeof IllustrationContainer> = {
    title: "Sidharth/Illustration Container",
    component: IllustrationContainer,
    argTypes: {
        img: { name: 'url', defaultValue: require('../assets/illustration.svg'), description: 'url of the image' },
        rev: { name: "reverse", defaultValue: false, description: 'reverse the image' },
        bg: { name: 'background color', defaultValue: '#fcfcfc', description: 'background color of the container' },
        children: { name: 'children', defaultValue: childrenDefault, description: 'children of the container' }

    }

}
export default Meta
const Template: ComponentStory<typeof IllustrationContainer> = (args) => <IllustrationContainer {...args} />;
export const Main = Template.bind({});
Main.args = {
    rev: false,
    img: require("../assets/illustration.svg")
    , bg: "#fcfcfc",
    h: "100%",
    w: "100%"
};
