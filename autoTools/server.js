/*
 * @Author: lgq
 * @Date: 2024-12-11 16:27:15
 * @LastEditors: lgq
 * @LastEditTime: 2024-12-11 17:59:36
 * @Description: file content
 * @FilePath: \lu-admin\autoTools\components\server.js
 */
console.log('================================');
import net from 'net'
const server = net.createConnection({ port: 5174 })

server.on('connect', () => {
    console.log('连接成功');
})