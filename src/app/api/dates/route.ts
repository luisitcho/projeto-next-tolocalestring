// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    const locales = [
        { value: "ar-SA", label: "Arabic (Saudi Arabia)" },
        { value: "bn-BD", label: "Bangla (Bangladesh)" },
        { value: "bn-IN", label: "Bangla (India)" },
        { value: "cs-CZ", label: "Czech (Czech Republic)" },
        { value: "da-DK", label: "Danish (Denmark)" },
        { value: "de-AT", label: "Austrian German" },
        { value: "de-CH", label: '"Swiss" German' },
        { value: "de-DE", label: "Standard German (as spoken in Germany)" },
        { value: "el-GR", label: "Modern Greek" },
        { value: "en-AU", label: "Australian English" },
        { value: "en-CA", label: "Canadian English" },
        { value: "en-GB", label: "British English" },
        { value: "en-IE", label: "Irish English" },
        { value: "en-IN", label: "Indian English" },
        { value: "en-NZ", label: "New Zealand English" },
        { value: "en-US", label: "US English" },
        { value: "en-ZA", label: "English (South Africa)" },
        { value: "es-AR", label: "Argentine Spanish" },
        { value: "es-CL", label: "Chilean Spanish" },
        { value: "es-CO", label: "Colombian Spanish" },
        { value: "es-ES", label: "Castilian Spanish (as spoken in Central-Northern Spain)" },
        { value: "es-MX", label: "Mexican Spanish" },
        { value: "es-US", label: "American Spanish" },
        { value: "fi-FI", label: "Finnish (Finland)" },
        { value: "fr-BE", label: "Belgian French" },
        { value: "fr-CA", label: "Canadian French" },
        { value: "fr-CH", label: '"Swiss" French' },
        { value: "fr-FR", label: "Standard French (especially in France)" },
        { value: "he-IL", label: "Hebrew (Israel)" },
        { value: "hi-IN", label: "Hindi (India)" },
        { value: "hu-HU", label: "Hungarian (Hungary)" },
        { value: "id-ID", label: "Indonesian (Indonesia)" },
        { value: "it-CH", label: '"Swiss" Italian' },
        { value: "it-IT", label: "Standard Italian (as spoken in Italy)" },
        { value: "ja-JP", label: "Japanese (Japan)" },
        { value: "ko-KR", label: "Korean (Republic of Korea)" },
        { value: "nl-BE", label: "Belgian Dutch" },
        { value: "nl-NL", label: "Standard Dutch (as spoken in The Netherlands)" },
        { value: "no-NO", label: "Norwegian (Norway)" },
        { value: "pl-PL", label: "Polish (Poland)" },
        { value: "pt-BR", label: "Brazilian Portuguese", selected: true },
        { value: "pt-PT", label: "European Portuguese (as written and spoken in Portugal)" },
        { value: "ro-RO", label: "Romanian (Romania)" },
        { value: "ru-RU", label: "Russian (Russian Federation)" },
        { value: "sk-SK", label: "Slovak (Slovakia)" },
        { value: "sv-SE", label: "Swedish (Sweden)" },
        { value: "ta-IN", label: "Indian Tamil" },
        { value: "ta-LK", label: "Sri Lankan Tamil" },
        { value: "th-TH", label: "Thai (Thailand)" },
        { value: "tr-TR", label: "Turkish (Turkey)" },
        { value: "zh-CN", label: "Mainland China, simplified characters" },
        { value: "zh-HK", label: "Hong Kong, traditional characters" },
        { value: "zh-TW", label: "Taiwan, traditional characters" },
    ];

    const dateStyles = [
        { value: "", label: "-" },
        { value: "full", label: "full" },
        { value: "long", label: "long" },
        { value: "medium", label: "medium" },
        { value: "short", label: "short" },
    ];

    const timeStyles = [
        { value: "", label: "-" },
        { value: "full", label: "full" },
        { value: "long", label: "long" },
        { value: "medium", label: "medium" },
        { value: "short", label: "short" },
    ];

    const localeMatchers = [
        { value: "", label: "-" },
        { value: "best-fit", label: "best-fit" },
        { value: "lookup", label: "lookup" },
    ];

    const hour12 = [
        { "value": "", "label": "-" },
        { "value": "false", "label": "false" },
        { "value": "true", "label": "true" }
    ];
    
    const hourCycle = [
        { "value": "", "label": "-" },
        { "value": "h11", "label": "h11" },
        { "value": "h12", "label": "h12" },
        { "value": "h23", "label": "h23" },
        { "value": "h24", "label": "h24" }
    ];

    const formatMatcher = [
        { "value": "", "label": "-" },
        { "value": "best-fit", "label": "best-fit (default)" },
        { "value": "basic", "label": "basic" }
    ];

    const weekday = [
        { "value": "", "label": "-" },
        { "value": "long", "label": "long" },
        { "value": "short", "label": "short" },
        { "value": "narrow", "label": "narrow" }
    ];

    const year = [
        { "value": "", "label": "-" },
        { "value": "2-digit", "label": "2-digit" },
        { "value": "numeric", "label": "numeric" }
    ];

    const month = [
        { "value": "", "label": "-" },
        { "value": "2-digit", "label": "2-digit" },
        { "value": "long", "label": "long" },
        { "value": "narrow", "label": "narrow" },
        { "value": "numeric", "label": "numeric" },
        { "value": "short", "label": "short" }
    ];

    const day = [
        {"value": "", "label": "-"}, 
        {"value": "2-digit", "label": "2-digit"}, 
        {"value": "numeric", "label": "numeric"}
    ];

    const hour = [
        {"value": "", "label": "-"}, 
        {"value": "2-digit", "label": "2-digit"}, 
        {"value": "numeric", "label": "numeric"}
    ];

    const minute = [
        {"value": "", "label": "-"}, 
        {"value": "2-digit", "label": "2-digit"}, 
        {"value": "numeric", "label": "numeric"}
    ];

    const second = [
        {"value": "", "label": "-"}, 
        {"value": "2-digit", "label": "2-digit"}, 
        {"value": "numeric", "label": "numeric"}
    ];

    const timeZoneName = [
        {"value": "", "label": "-"}, 
        {"value": "long", "label": "long"}, 
        {"value": "short", "label": "short"}
    ];

    const timeZones = [
        { value: "UTC", label: "Coordinated Universal Time (UTC)" },
        { value: "GMT", label: "Greenwich Mean Time (GMT)" },
        { value: "Europe/London", label: "London" },
        { value: "Europe/Paris", label: "Paris" },
        { value: "America/New_York", label: "New York" },
        { value: "America/Sao_Paulo", label: "São Paulo" },
        { value: "Asia/Tokyo", label: "Tokyo" },
        { value: "Asia/Shanghai", label: "Shanghai" },
        { value: "Australia/Sydney", label: "Sydney" },
        { value: "Africa/Johannesburg", label: "Johannesburg" }
    ];



    // const stats = {
    //     totalUsers: locales.length,
    //     totalProducts: dateStyles.length,
    //     lastUpdated: new Date().toISOString(),
    // };

    return NextResponse.json({
        success: true,
        data: {
            locales,
            dateStyles,
            timeStyles,
            localeMatchers,
            hour12,
            hourCycle,
            formatMatcher,
            weekday,
            year,
            month,
            day,
            hour,
            minute,
            second,
            timeZoneName,
            timeZones
            // stats,
        },
        metadata: {
            apiVersion: "1.0",
            responseTime: Date.now(),
        },
    });
}
