import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataSettings } from 'src/app/data.constant.setting';
import { PagesService } from '../pages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  modalRef?: BsModalRef;
  CouponData: any = [];
  encounteredErrorMsg = '';
  userid = '';

  public constructor(
    private modalService: BsModalService,
    private actRoute: ActivatedRoute,
    private PagesService: PagesService
  ) {
    this.userid = this.actRoute.snapshot.params['userid'];
    DataSettings.DataMethod.localStorage.setItem('userId', this.userid);
  }

  async ngOnInit(): Promise<void> {
    await this.PagesService.fetchDetails().subscribe(
      (result: any) => {
        this.CouponData = JSON.parse(JSON.stringify(result)).offersJson;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered modal-claimed' })
    );
  }

  claimCoupon(appliedCoupon: string, appliedCategory: string) {
    DataSettings.claimedOffers(appliedCoupon, appliedCategory);
  }
}
