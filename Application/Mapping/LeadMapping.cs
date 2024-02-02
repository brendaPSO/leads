using Application.Models;
using Repository.Entity;

namespace Application.Mapping
{
    public static class LeadMapping
    {
        public static LeadModel ToModel(this Lead entity)
        {
            LeadModel model = new LeadModel();

            model.jobId = entity.JobId;
            model.accepted = entity.Accepted;
            model.firstName = entity.FirstName;
            model.lastName = entity.LastName;
            model.suburb = entity.Suburb;
            model.category = entity.Category;
            model.descriptionJob = entity.DescriptionJob;
            model.price = entity.Price;
            model.email = entity.Email;
            model.phoneNumber = entity.PhoneNumber;
            model.createdAt = entity.CreatedAt;
            model.deletedAt = entity.DeletedAt;

            return model;
        }

        public static IEnumerable<LeadModel> ToModel(this IEnumerable<Lead> entity)
        {
            if(entity == null) { 
                return new List<LeadModel>();
            }

            return entity.Select(x => x.ToModel());
        }
    }
}
