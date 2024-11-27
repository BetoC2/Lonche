import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitiesAdminComponent } from './cities-admin.component';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from 'app/services/shared/http-service.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import { provideIcons } from '@ng-icons/core';
import { faSolidSquareXmark } from '@ng-icons/font-awesome/solid';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CitiesAdminComponent', () => {
  let component: CitiesAdminComponent;
  let fixture: ComponentFixture<CitiesAdminComponent>;
  let mockHttpService: jasmine.SpyObj<HttpService>;

  const mockCities = [
    { _id: '1', name: 'Guadalajara', region: 'Jalisco', country: 'México', language: 'ES' },
    { _id: '2', name: 'México D.F.', region: 'CDMX', country: 'México', language: 'ES' },
  ];

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj('HttpService', ['get', 'post', 'delete']);
    mockHttpService.get.and.returnValue(of(mockCities));
    mockHttpService.post.and.returnValue(of(mockCities[0]));
    mockHttpService.delete.and.returnValue(of(mockCities[0]));

    await TestBed.configureTestingModule({
      imports: [MatTableModule, ReactiveFormsModule, NgIconComponent],
      declarations: [CitiesAdminComponent],
      providers: [
        FormBuilder,
        { provide: HttpService, useValue: mockHttpService },
        provideIcons({ faSolidSquareXmark }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CitiesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of cities', () => {
    const rows = fixture.debugElement.queryAll(By.css('mat-row'));
    expect(rows.length).toBe(2); // Should match the number of cities in mockCities

    const firstRow = rows[0].nativeElement.textContent.trim();
    expect(firstRow).toContain('Guadalajara');
    expect(firstRow).toContain('Jalisco');
    expect(firstRow).toContain('México');
    expect(firstRow).toContain('ES');
  });

  it('should display the correct placeholder in input fields', () => {
    const cityNameInput = fixture.debugElement.query(By.css('input[formControlName="name"]')).nativeElement;
    const regionInput = fixture.debugElement.query(By.css('input[formControlName="region"]')).nativeElement;
    const countryInput = fixture.debugElement.query(By.css('input[formControlName="country"]')).nativeElement;
    const languageInput = fixture.debugElement.query(By.css('input[formControlName="language"]')).nativeElement;

    expect(cityNameInput.placeholder).toBe('Ej: Guadalajara');
    expect(regionInput.placeholder).toBe('Ej: Jalisco');
    expect(countryInput.placeholder).toBe('Ej: México');
    expect(languageInput.placeholder).toBe('Ej: ES');
  });

  it('should call createCity and add a city', () => {
    component.cityForm.setValue({
      name: 'Cancún',
      region: 'Quintana Roo',
      country: 'México',
      language: 'ES',
    });

    component.createCity();
    expect(mockHttpService.post).toHaveBeenCalledOnceWith('cities/', component.cityForm.value);
  });

  it('should handle errors when creating a city', () => {
    mockHttpService.post.and.returnValue(throwError(() => new Error('Error al crear ciudad')));
    component.cityForm.setValue({
      name: 'Cancún',
      region: 'Quintana Roo',
      country: 'México',
      language: 'ES',
    });

    component.createCity();
    expect(mockHttpService.post).toHaveBeenCalled();
    // Optionally, you could verify that an error message is displayed, depending on how you handle it in the template
  });

  it('should call deleteCity and remove a city', () => {
    const deleteButton = fixture.debugElement.query(By.css('mat-icon[name="faSolidSquareXmark"]'));
    deleteButton.triggerEventHandler('click', null);

    expect(mockHttpService.delete).toHaveBeenCalledOnceWith('cities/1');
  });

  it('should handle errors when deleting a city', () => {
    mockHttpService.delete.and.returnValue(throwError(() => new Error('Error al eliminar ciudad')));
    
    const deleteButton = fixture.debugElement.query(By.css('mat-icon[name="faSolidSquareXmark"]'));
    deleteButton.triggerEventHandler('click', null);
    expect(mockHttpService.delete).toHaveBeenCalled();
    // Optionally, verify error handling logic
  });
});
