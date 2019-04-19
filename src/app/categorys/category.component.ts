import { Component } from '@angular/core';
import { CategorService } from '../services/category-service';
import { Constants } from '../common/constants';

@Component({
    templateUrl: './categorys.html',
    providers: [CategorService]
})

export class categorys{
    public categoryList:any = [];
    public categoryType = Constants.categoryTypes.expense;
    public categoryTypes = Constants.categoryTypes;

    constructor(private _categoryService:CategorService){      
    }

    ngOnInit(){
        this._categoryService.getCategories().subscribe(
            res => this.categoryList = res,
            error => console.log(error)
                        
        )        
        
    }

    switchCategoryType(type:string) {
        console.log(type);
        this.categoryType = type;
    }
}