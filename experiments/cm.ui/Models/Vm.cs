using System;

namespace cm.ui.Models
{
    public class Vm
    {
        public string id => Guid.NewGuid().ToString();
        public string name { get; set; }
        public string status { get; set; }
        public string provider { get; set; }
        public string[] addresses { get; set; }
        public string flavor { get; set; }
        public string created { get; set; }
        public string meta { get; set; }
    }
}
