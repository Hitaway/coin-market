export class Sort {

    private _sortOrder: number = 1;
    
    public startSort(property: any, order: string, type: string = "") {
        if (order === "desc") {
            this._sortOrder = -1;
        }
        return (a: any, b: any) => {
            if (type === "date") {
                return this._sortData(new Date(a[property]), new Date(b[property]));
            }
            else if (type === "number"){
                return this._sortData(new Number(a[property]), new Number(b[property]));
            }
            else {
                return a[property].localeCompare(b[property]) * this._sortOrder;
            }
        }
    }

    private _sortData(a: any, b: any): number {
        if (a < b) {
            return -1 * this._sortOrder;
        } else if (a > b) {
            return 1 * this._sortOrder;
        } else {
            return 0 * this._sortOrder;
        }
    }
}