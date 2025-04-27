import { useEffect } from 'react';
import { Row, Col, Form, Input, Select, Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getMovie } from '../../store/movie';
import { mainColumns, mainLayout, mseColumns } from '../../db';
import CButton from '../../components/CButton';
import styles from './styles.module.scss';

export default function Main() {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { Search, totalResults } = useAppSelector((state) => state?.getMovieData?.data);
  const isLoading = useAppSelector((state) => state.getMovieData.isLoading);

  const onFinish = ({ moviename, publishyear, type }) => {
    if (isLoading) return;
    dispatch(getMovie({ pageNumber: 1, moviename, publishyear, type }));
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChange = (pageNumber) => {
    const { moviename, publishyear, type } = form.getFieldsValue();
    dispatch(getMovie({ pageNumber, moviename, publishyear, type }));
  };

  useEffect(() => {
    onChange(1);
  }, []);

  return (
    <>
      <Form className={styles['c-form']} {...mainLayout} form={form} name="control-hooks" onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Form.Item
              name="moviename"
              label="Movie Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="publishyear" label="Publish Year">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="type" label="MSE">
              <Select options={mseColumns}></Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item className={styles['c-form__button']}>
              <CButton type={isLoading ? 'disabled' : 'primary'} htmlType="submit" text="Search" />
              <CButton type="danger" handleClick={onReset} text="Reset" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div>
        <Table
          columns={mainColumns}
          loading={isLoading}
          pagination={{
            position: ['bottomCenter'],
            showSizeChanger: false,
            total: totalResults,
            onChange: onChange,
          }}
          dataSource={Search}
        />
      </div>
    </>
  );
}
