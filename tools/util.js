/**
 * @file 一些工具方法
 * @author mip-support@baidu.com
 * @link https://github.com/mipengine/mip-extension-optimizer/blob/master/lib/util.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

/**
 * 获取文件夹子目录
 *
 * @param  {string} dir 路径
 *
 * @return {Array}
 */
exports.getFolders = dir => {
    return fs.readdirSync(dir).filter(file => exports.isDirectory(path.join(dir, file)));
};

/**
 * 官方核心组件
 *
 * @type {Array}
 */
exports.coreExtensions = [
    'mip-carousel',
    'mip-iframe',
    'mip-img',
    'mip-pix',
    'mip-video'
];

/**
 * 判断文件是否存在
 *
 * @inner
 * @param {string} file 文件路径
 * @return {boolean}
 */
exports.fileExists = file => {
    try {
        return fs.statSync(file).isFile();
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }

        return false;
    }
};

/**
 * 同步读取文件
 *
 * @param  {string} filepath 文件路径
 *
 * @return {string}
 */
exports.readFileSync = filepath => {
    if (!exports.fileExists(filepath)) {
        return '';
    }

    return fs.readFileSync(filepath).toString();
};

/**
 * 同步读取json文件
 *
 * @param  {string} filepath 文件路径
 *
 * @return {Object}
 */
exports.readJsonSync = filepath => {
    let data = {};

    try {
        data = JSON.parse(exports.readFileSync(filepath));
    }
    catch (e) {
    }

    return data;
};

/**
 * 判断文件是否目录
 *
 * @inner
 * @param {string} file 文件路径
 * @return {boolean}
 */
exports.isDirectory = file => {
    try {
        return fs.statSync(file).isDirectory();
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }

        return false;
    }
};
