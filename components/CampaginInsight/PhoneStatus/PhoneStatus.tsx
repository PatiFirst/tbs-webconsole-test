import { Menu, Dropdown, Button, message, Input } from 'antd'
import { SearchOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
const { Search } = Input;
import StatusTable from './StatusTable';

export default function PhoneStatus() {
    function handleMenuClick(e: any) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );

      const onSearch = (value: any) => console.log(value);

    return (
        <div className="phoneSection">
            <div className="phoneWrapperTop">
                <h3 className="phoneTitle">เบอร์ผู้รับทั้งหมด</h3>
                <div className="phoneSearchBar">
                    {/* <p>ค้นหาเบอร์ผู้รับ</p> */}
                    {/* <input type="text" placeholder="" />
                    <Button type="link" icon={<SearchOutlined />} /> */}
                    <Search placeholder="ค้นหาเบอร์ผู้รับ" onSearch={onSearch} enterButton />
                </div>
            </div>

            <div className="phoneWrapperSub">
                <div className="subLeft">
                    <Dropdown overlay={menu} className="selectAction">
                        <Button>
                            เลือก action <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Button type="primary" className="applyButton">
                        Apply
                    </Button>
                    <p className="applyCount">เลือกจำนวน 50 เบอร์</p>
                    
                </div>
                <div className="subRight">
                    <p className="topicStatus">สถานะการส่ง</p>
                    <Dropdown overlay={menu} className="sendStatusMenu">
                        <Button>
                            ทั้งหมด <DownOutlined />
                        </Button>
                    </Dropdown>
                    <p className="topicStatus">สถานะการคลิก</p>
                    <Dropdown overlay={menu}>
                        <Button>
                            ทั้งหมด <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </div>
            
            
            <StatusTable />
        </div>
    )
}
