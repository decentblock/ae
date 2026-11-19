# COGS Global execution pack (intern)

**Start date:** 2026-11-03  
**Domain focus:** https://cogsglobal.ae/

## Files

| Path | Description |
|------|-------------|
| [output/COGS_Execution_Plan.xlsx](./output/COGS_Execution_Plan.xlsx) | Master tracker — all days, social, KPI, UTM, AI guide |
| [by-date/](./by-date/) | One folder per calendar day with `daily-brief.docx` + `daily-brief.md` |

## Regenerate

```bash
cd sites/cogsglobal-ae/execution
npm install
npm run generate
```

Change start date in `scripts/generate-intern-execution-pack.mjs` (`START_DATE`).
