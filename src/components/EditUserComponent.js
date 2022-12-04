import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editSelectedUserHandler} from "../store/actions/dashboardActions";

const { Option } = Select;

const EditUserComponent = (props) => {
    const {editModalVisibleHandler, modalVisible} = props
    const dispatch = useDispatch();
    const {users, item} = useSelector((state) => state.dashboard)
    const [form] = Form.useForm();
    const [objToEdit, setObjToEdit] = useState({});

    useEffect(() => {
        if (item.id) {
            form.setFieldsValue(item)
            const res = (users || []).find(user => user.id?.value === item.id )
            setObjToEdit(res)
        }
    }, [item])

    const onFinish = (values) => {
        const transfer = {
            name: {
                first: values.first,
                last: values.last
            },
            id: objToEdit.id?.value,
            ...values
        }
        dispatch(editSelectedUserHandler(transfer))
        form.resetFields();
        setObjToEdit({});
    };

    return (
        <div className='drawer-wr'>
            <Drawer
                title="Edit selected an account"
                width={500}
                onClose={editModalVisibleHandler}
                open={modalVisible}
                bodyStyle={{
                    paddingBottom: 80,
                }}
            >
                <Form layout="vertical" hideRequiredMark onFinish={onFinish} form={form}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="first"
                                label="First name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter first name',
                                    },
                                ]}
                            >
                                <Input placeholder="John" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="last"
                                label="Last name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter last name',
                                    },
                                ]}
                            >
                                <Input placeholder="Dou" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter email',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="johndou@example.com"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select a gender',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select a gender">
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="nation"
                                label="Nation"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the nation',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the nation">
                                    <Option value="IE">IE</Option>
                                    <Option value="DE">DE</Option>
                                    <Option value="AU">AU</Option>
                                    <Option value="UK">UK</Option>
                                    <Option value="US">US</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="location"
                                label="Location"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the location',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the location">
                                    <Option value="Blessington">Blessington</Option>
                                    <Option value="Hobart">Hobart</Option>
                                    <Option value="Isparta">Isparta</Option>
                                    <Option value="Pueblo">Pueblo</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Space style={{display: "flex", justifyContent: "flex-end"}}>
                        <Button onClick={editModalVisibleHandler}>Cancel</Button>
                        <Button onClick={editModalVisibleHandler} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Space>
                </Form>
            </Drawer>
        </div>
    );
}

export default EditUserComponent;