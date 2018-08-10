/**
 * cn - 恢复删除
 *    -- 设置 recoverAble 为 true，点击删除后，文件会标记为已删除，并提供恢复功能
 * en - recover
 */
import React from 'react'
import { Upload, Button } from 'shineout'
import FontAwesome from '../Icon/FontAwesome'

export default function () {
  return (
    <div>
      <Upload
        action="http://jsonplaceholder.typicode.com/posts"
        accept="image/*"
        multiple
        name="file"
        onSuccess={(res, file) => file.name}
        style={{ width: 300, marginBottom: 30 }}
        recoverAble
        validator={{
          size: s => (s > 10240 ? new Error('max file size is 10KB') : undefined),
        }}
      >
        <Button><FontAwesome name="upload" /> Upload file</Button>
      </Upload>

      <Upload.Image
        action="http://jsonplaceholder.typicode.com/posts"
        accept="image/*"
        multiple
        name="file"
        recoverAble
        onSuccess={(res, file, data) => ({ data })}
        validator={{
          size: s => (s > 10240 ? new Error('max file size is 10KB') : undefined),
        }}
        renderResult={f => f.data}
      />
    </div>
  )
}