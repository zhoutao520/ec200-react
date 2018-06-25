import React, { Component } from 'react';
import { Table, Spin, Icon } from 'antd';
import '../styles/facilities.css';
import axios from 'axios';

const columns = [
    { title: '设备编号', dataIndex: 'machine_no'},
    { title: '设备名称', dataIndex: 'machine_name'},
    { title: '安装地点', dataIndex: 'machine_place'},
    { title: '子系统', dataIndex: 'machine_childSys'},
    { title: '系统', dataIndex: 'machine_system' },
    { title: '状态', dataIndex: 'machine_activite' },
];
  
export default class Facilities extends Component{
    state = {
        loading: true,
        data: []
    };

    componentWillMount() {
        axios.get('http://xf.epcifm.com/console/show_taizhang/')
        .then(res => {
            let result = res.data.data;
            for (let item of result) {
                item.machine_activite ? item.machine_activite = '可用' :  item.machine_activite = '不可用';
                if(!item.machine_remarks) item.machine_remarks = '无';
            }
            this.setState({ data: result});
            this.setState({ loading: false });
        })
    }

    render(){
        return(
            <div className="content">
                <Spin spinning={this.state.loading} delay={500} indicator={<Icon type="sync" style={{ fontSize: '.24rem' }} spin />}>
                    <Table
                        columns={columns}
                        expandedRowRender={record => (
                            <div>
                                <p>型号规格：{record.machine_type}</p>
                                <p>品牌：{record.machine_brand}</p>
                                <p>采购时间：{record.machine_maker}</p>
                                <p>备注：{record.machine_remarks}</p>
                                <p>主要参数：{record.machine_main}</p>
                            </div>
                        )}
                        dataSource={this.state.data}
                    />
                </Spin>
            </div>
        );
    }
}