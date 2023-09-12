/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// module.exports = {
//     async headers() {
//         return [
//             {
//                 source: '/', 
//                 headers: [
//                     {
//                         key: "http-equiv",
//                         value: "Content-Security-Policy" 
//                     },
//                     {
//                         key: "content",
//                         value: "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com"
//                     },
//                 ]
//             }         
//         ]
//     }
// }

