import React, { useCallback } from "react";
import {List} from 'react-virtualized'

function BlockList({ blocks, onRemove}) {
    const Render = useCallback(
        ({index, type, style}) => {
            const block = blocks[index];
            return(
                <BlockListItem
                    block={block}
                    type={type}
                    onRemove={onRemove}
                />
            )
        },
        [ blocks, onRemove ]
    )
    return(
        <></>
    )
}




{/* <Antd_button icon={<LinkOutlined />} block onClick={modalOnClick}>링크</Antd_button>
<Antd_button icon={<FontSizeOutlined />} block>텍스트</Antd_button>
<Antd_button icon={<PictureOutlined />} block>사진</Antd_button> */}