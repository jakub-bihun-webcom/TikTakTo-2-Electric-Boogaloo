import { TestBed } from '@angular/core/testing';
import { IcsService } from './ics.service';

describe('GenerateIcsService', () => {
  let service: IcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcsService);
  });

  it('should be created', () => {
    let result = service.createIcsContent(bw2023Input, ["_VY8QaTOMaQ1XSofs1geY", "yAxcbfZ90uLN81etwDsFJ"]);
    let resultFirst = result.slice(0, 172)
    let expectedFirst = bw2023Output.slice(0, 172)
    expect(resultFirst).toBe(expectedFirst);
  });

  it( 'should be created',()=>{
    let result = service.createIcsContent(bw2023Input, ["_VY8QaTOMaQ1XSofs1geY", "yAxcbfZ90uLN81etwDsFJ"]);
    let resultMiddle = result.slice(198, 319)
    let expectedMiddle = bw2023Output.slice(198, 319)
    expect(resultMiddle).toBe(expectedMiddle);
  })

  it( 'should be created',()=>{
    let result = service.createIcsContent(bw2023Input, ["_VY8QaTOMaQ1XSofs1geY", "yAxcbfZ90uLN81etwDsFJ"]);
    let resultEnd = result.slice(336)
    let expectedEnd = bw2023Output.slice(336)
    expect(resultEnd).toBe(expectedEnd);
  })
});

const bw2023Input = {
  'Neujahrstag': {
    datum: '2023-01-01',
    hinweis: ''
  },
  'Heilige Drei Könige': {
    datum: '2023-01-06',
    hinweis: ''
  }
};

const bw2023Output =

  'BEGIN:VCALENDAR\r\n' +
  'VERSION:2.0\r\n' +
  'CALSCALE:GREGORIAN\r\n' +
  'PRODID:adamgibbons/ics\r\n' +
  'METHOD:PUBLISH\r\n' +
  'X-PUBLISHED-TTL:PT1H\r\n' +
  'BEGIN:VEVENT\r\n' +
  'UID:_VY8QaTOMaQ1XSofs1geY\r\n' +
  'SUMMARY:Neujahrstag\r\n' +
  'DTSTAMP:20230209T134300Z\r\n' +
  'DTSTART;VALUE=DATE:20230101\r\n' +
  'END:VEVENT\r\n' +
  'BEGIN:VEVENT\r\n' +
  'UID:yAxcbfZ90uLN81etwDsFJ\r\n' +
  'SUMMARY:Heilige Drei Könige\r\n' +
  'DTSTAMP:20230209T134200Z\r\n' +
  'DTSTART;VALUE=DATE:20230106\r\n' +
  'END:VEVENT\r\n' +
  'END:VCALENDAR\r\n'
;

