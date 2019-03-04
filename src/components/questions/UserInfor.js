
import React from "react";
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio
} from 'antd';

const userInfo = (props) => {
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const Option = Select.Option;
    const RadioGroup = Radio.Group;
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Item
                {...formItemLayout}
                label="E-mail">
                {getFieldDecorator('email', {
                    rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                        required: true, message: 'Please input your E-mail!',
                    }],
                })(
                    <Input />
                )}
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="Name">
                {getFieldDecorator('name', {
                    rules: [{
                        type: 'text', message: 'The input is not valid !',
                    }, {
                        required: true, message: 'Please input Name !',
                    }],
                })(
                    <Input />
                )}
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="Age Range">
                {getFieldDecorator('agerange', {
                    rules: [{
                        type: 'text', message: 'The input is not valid !',
                    }, {
                        required: true, message: 'Please select Age Range!',
                    }],
                })(
                    <Select >
                        {ageRangeList().map(a =>
                            (<Option value={a} >{a}</Option>)
                        )}
                    </Select>
                )}
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="Gender">
                {getFieldDecorator('gender', {
                    rules: [{
                        required: true, message: 'Please input Name !',
                    }],
                })(
                    <RadioGroup value={1}>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                    </RadioGroup>
                )}
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="Income">
                {getFieldDecorator('income', {
                    rules: [{
                        type: 'text', message: 'The input is not valid !',
                    }, {
                        required: true, message: 'Please select Inomce Range!',
                    }],
                })(
                    <Select >
                        {incomelist().map(a =>
                            (<Option value={a} >{a}</Option>)
                        )}
                    </Select>
                )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('disclaimer', {
                    valuePropName: 'checked',
                })(
                    <div>                      
                   <Checkbox>I agree that my participation in this psychometric test is voluntary and understand that my responses will be kept confidential and used solely for the purposes of establishing my financial personality profile.
                    </Checkbox>
                    </div>

                )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <div>
                        <p>
                            Acknowledgement &amp; Consent of Disclosure of Personal Data
                    </p>
                    <Checkbox>I acknowledge that I have read and understood the [above Data Protection Notice], and consent to the collection, use and disclosure of my personal data by WealthHub for the purposes set out in the Notice.
                    </Checkbox>
                    </div>

                )}
            </Form.Item>
        </Form>
    )
}
export default Form.create({ name: 'register' })(userInfo);

const ageRangeList = () => {
    return [
        "<15",
        "16-18",
        "16-18",
        "25-29",
        "30-39",
        "40-49",
        "50-59",
        "60-69",
        ">70"
    ]
}
const incomelist = () => {
    return [
        ">1,999",
        "2,000-3,000",
        "3,000-4,000",
        "4,000-5,000",
        "5,000-10,000",
        "10,000-20,000"
    ]
}