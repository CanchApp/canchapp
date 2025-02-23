import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CommonsLibService {
    constructor() { }
    getFormatIsoDate(date, time) {
        let _date = new Date(date);
        const year = _date.getFullYear();
        const month = String(_date.getMonth() + 1).padStart(2, '0');
        const day = String(_date.getDate()).padStart(2, '0');
        const hours = time.split(':')[0];
        const minutes = time.split(':')[1];
        const localISOString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
        return localISOString;
    }
    getTime(date) {
        let _date = new Date(date);
        const hours = _date.getHours().toString().padStart(2, '0');
        const minutes = _date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}:00`;
    }
    getMonthText(numberMonth) {
        const monthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthText[numberMonth];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9ucy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnMvY29tbW9ucy1saWIvc3JjL2xpYi9jb21tb25zLWxpYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsZ0JBQWdCLENBQUM7SUFFakIsZ0JBQWdCLENBQUMsSUFBbUIsRUFBRSxJQUFZO1FBRWhELElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sY0FBYyxHQUFHLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDO1FBQ3hFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBbUI7UUFFekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsT0FBTyxHQUFHLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxDQUFDLFdBQW1CO1FBQzlCLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM3SSxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDOytHQTNCVSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZoQixNQUFNOzs0RkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uc0xpYlNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBnZXRGb3JtYXRJc29EYXRlKGRhdGU6IERhdGUgfCBzdHJpbmcsIHRpbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgbGV0IF9kYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKF9kYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKF9kYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IGhvdXJzID0gdGltZS5zcGxpdCgnOicpWzBdO1xyXG4gICAgY29uc3QgbWludXRlcyA9IHRpbWUuc3BsaXQoJzonKVsxXTtcclxuICAgIGNvbnN0IGxvY2FsSVNPU3RyaW5nID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aG91cnN9OiR7bWludXRlc306MDBgO1xyXG4gICAgcmV0dXJuIGxvY2FsSVNPU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZShkYXRlOiBEYXRlIHwgc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICBsZXQgX2RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIGNvbnN0IGhvdXJzID0gX2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gX2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfTowMGA7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aFRleHQobnVtYmVyTW9udGg6IG51bWJlcikge1xyXG4gICAgY29uc3QgbW9udGhUZXh0ID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcbiAgICByZXR1cm4gbW9udGhUZXh0W251bWJlck1vbnRoXTtcclxuICB9XHJcbn1cclxuIl19