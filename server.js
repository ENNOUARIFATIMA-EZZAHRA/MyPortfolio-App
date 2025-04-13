"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqHandler = void 0;
import { AngularNodeAppEngine, writeResponseToNodeResponse, isMainModule, createNodeRequestHandler } from '@angular/ssr/node';
import express from 'express';
import cors from 'cors'; // استيراد CORS
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// تحديد المسار للمجلد الذي يحتوي على السيرفر
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
// تحديد المسار لمجلد `browser` الذي يحتوي على الملفات الثابتة الخاصة بـ Angular
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// تفعيل CORS لجميع النطاقات
app.use(cors()); // يسمح لجميع النطاقات بالوصول للـ API

// إعداد الملفات الثابتة الخاصة بـ Angular
app.use(express.static(browserDistFolder, {
    maxAge: '1y',  // تعيين مدة التخزين المؤقت للملفات الثابتة
    index: false,  // عدم استخدام ملف الفهرس بشكل افتراضي
    redirect: false, // عدم إعادة التوجيه في حالة الوصول إلى المسار الجذر
}));

// التعامل مع جميع الطلبات الأخرى من خلال عرض تطبيق Angular
app.use('/**', (req, res, next) => {
    angularApp
        .handle(req)
        .then((response) => {
            return response ? writeResponseToNodeResponse(response, res) : next();
        })
        .catch(next); // في حالة حدوث خطأ أثناء معالجة الطلب، يتم تمرير الخطأ إلى المعالج التالي
});

// بدء السيرفر إذا كان هذا هو المدخل الرئيسي
if (isMainModule(import.meta.url)) {
    const port = process.env['PORT'] || 4000; // استخدام رقم المنفذ من البيئة أو افتراض 4000
    app.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

// توفير معالج الطلبات المستخدم من قبل Angular CLI أو Firebase Cloud Functions
exports.reqHandler = createNodeRequestHandler(app);
