
export interface TabItem {
    key: string
    component: any
    label: string
}

export interface Tab {
    item: TabItem
    active: boolean
    index: number
}
