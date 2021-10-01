import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IllustrationContainer from "../components/illustrationContainer";
import Illustration from "./assets/illustration.svg"
export default {
    title: "Illustration Container",
    component: IllustrationContainer,
    argTypes: {
        img: 'url',
        rev: true,
        bg: { type: 'color' },
        children: HTMLElement,

    }

}
const Template: ComponentStory<typeof IllustrationContainer> = (args) => <IllustrationContainer {...args} />;
export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
    rev: false,
    img: Illustration,
    children: <div style={{ flex: 1, width: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <h6>Hello World</h6>
    </div>
    , bg: "#fcfcfc",
    h: "100%",
    w: "100%"
};
