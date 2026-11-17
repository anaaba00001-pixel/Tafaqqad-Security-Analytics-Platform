# تَفَقَّدْ | Tafaqqad

**منصة التحليلات الأمنية | Security Analytics Platform**

واجهة ثنائية اللغة لعرض سجلات الدخول الأمنية المستوردة ومراجعتها. يعتمد الإصدار الحالي على استيراد CSV حقيقي، بينما تظهر أقسام الحوادث والثغرات والتصيّد بحالة فارغة إلى أن تُربط بمصادر بيانات فعلية.

A bilingual interface for importing and reviewing security login records. The current release uses a real CSV import flow. Incidents, vulnerabilities, and phishing sections intentionally remain empty until real data sources are implemented.

## Current features

- Arabic RTL and English LTR interfaces
- Real CSV import for login records
- Import preview and required-column validation
- Persistent browser storage
- Duplicate and rejected-row reporting
- Search, filters, and CSV export
- Responsive desktop and mobile layout

## Run locally

Open `dist/index.html` in a modern browser. The application is buildless and has no dependency installation step.

For a clean verification run, open the page in a private browser window or clear the site’s local storage first.

## Supported files

Login records are imported from CSV files with this header:

```csv
account,time,attempt_result,ip
```

- `account`, `time`, and `attempt_result` are required.
- `ip` is optional.
- Imported records remain available after a page refresh.
- Re-importing the same records reports them as duplicates.

Security incidents, vulnerability reports, and phishing email ingestion are planned features and intentionally show an empty state.

## Verification workflow

1. Open the application in a private window.
2. Open **Login Records / سجلات الدخول**.
3. Download the CSV template or choose a compatible CSV file.
4. Review the preview and confirm the import.
5. Verify the added, duplicate, and rejected counts.
6. Refresh the page and confirm the imported rows remain visible.
7. Import the same file again and confirm every existing row is counted as a duplicate.

## Brand palette

- Ice blue: `#A7EBF2`
- Aqua: `#54ACBF`
- Medium blue: `#26658C`
- Deep teal: `#023859`
- Navy: `#011C40`
