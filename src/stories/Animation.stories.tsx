import React from "react";
import { ComponentMeta, ComponentStory, } from "@storybook/react";
import { Animation } from "../components/Animation";
import { Button } from "@chakra-ui/react";
const childrenDefault = <Button onClick={() => console.log('clicked')}>Button</Button>
const Meta: ComponentMeta<typeof Animation> = {
    title: "Sidharth/Animation",
    component: Animation,
    argTypes: {
        t: { name: 'time taken in ms', defaultValue: 500, description: 'time Taken by the animation' },
        a: { name: 'animation', defaultValue: 0, description: 'animation type' },
        children: { name: 'children', defaultValue: childrenDefault, description: 'children of the container' }
    }
};
export default Meta
const Template: ComponentStory<typeof Animation> = (args) => <Animation {...args} />;
export const Main = Template.bind({});
Main.args = {
    t: 5000,
    a: 0
}
