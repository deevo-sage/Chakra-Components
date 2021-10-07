import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ImageCarousel from "../components/ImageCarousel";
const childrenDefault = <div style={{ flex: 1, width: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Hello World</h1>
    <h2>Hello World</h2>
    <h3>Hello World</h3>
    <h4>Hello World</h4>
    <h5>Hello World</h5>
    <h6>Hello World</h6>
</div>
const Meta: ComponentMeta<typeof ImageCarousel> = {
    title: "Hari/ImageCarousel",
    component: ImageCarousel,
    argTypes: {
    }

}
export default Meta
const Template: ComponentStory<typeof ImageCarousel> = (args) => <ImageCarousel {...args} />;
export const Main = Template.bind({});
Main.args = {
    size: "100%",
    img: [
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80",
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80",
        "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80",
    ],
    imageFit: 1,
    animationType: "animation1",
    headerText: ["Lion", "Fox", "Butterfly", "Cheetah", "Panda"],
    middleText: ["King", "haha", "", "Fast", ""],
    footerText: ["", "hehe", "", "", ""],
    headerFontSize: "60px",
    middleFontSize: "60px",
    footerFontSize: "60px",
};
