/*
 * @Author: lgq
 * @Date: 2024-09-18 15:56:25
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-18 15:56:40
 * @Description: file content
 * @FilePath: \lu-admin\src\setting\enums\httpEnum.ts
 */

export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  upload
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export enum ResultEnum {
    SUCCESS = '200',
    ERROR = -1,
    TIMEOUT = 401,
    TYPE = 'success',
}