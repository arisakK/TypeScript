export default interface DailyReportInterface {
    key: string
    type: string
    date?: Date | null
    team: string
    value: any
}
